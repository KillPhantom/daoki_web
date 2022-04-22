/* Styled Components */
import {
  Button,
  LoadingCircle,
} from "../../../styles/homePage/topSection/Header";

import { useState } from "react";
import Web3 from "web3";
import { ethers } from "ethers";
import { Modal } from "antd";

/* Utils */
import {
  setAuthTokenCookie,
  setPublicAddressCookie,
  getPublicAddressCookie,
  setUserIdCookie,
} from "../../../utils/Cookie";
import { getUserAuthToken } from "../../../data/selectors/UserSelectors";

type PropsType = {};

let web3: Web3 | undefined = undefined; // Will hold the web3 instance

const WalletButton = ({}: PropsType) => {
  const [loading, setLoading] = useState(false); // Loading button state
  const [authSuccess, setAuthSuccess] = useState(Boolean(getUserAuthToken));
  const [publicAddress, setPublicAddress] = useState<string | null | undefined>(
    getPublicAddressCookie()
  );

  const onLoggedIn = (response: any) => {
    if (response?.data.token) {
      setAuthTokenCookie(response.data.token);
      setUserIdCookie(response.data.userId);
      setAuthSuccess(true);
      setLoading(false);
    }
  };

  const handleAuthenticate = ({
    publicAddress,
    signature,
    msgHash,
  }: {
    publicAddress: string;
    signature: string;
    msgHash: any;
  }) =>
    fetch(`http://127.0.0.1:8080/daoki/user/authentication`, {
      body: JSON.stringify({ publicAddress, signature, message: msgHash }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((response) => {
      return response.json();
    });

  const handleSignMessage = async ({
    publicAddress,
    nonce,
  }: {
    publicAddress: string;
    nonce: string;
  }) => {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const message = `Ethereum Signed Message:${nonce}`.trim();
    const signature = await signer.signMessage(message);
    const msgHash = ethers.utils.hashMessage(message);

    return { publicAddress, signature, msgHash };
  };

  const handleSignup = (publicAddress: string) =>
    fetch(`http://127.0.0.1:8080/daoki/user/create-user`, {
      body: JSON.stringify({ publicAddress }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((response) => response.json());

  const onDemoClick = () => {
    Modal.info({
      title: "Coming up soon",
      content: "function are being developed currently",
    });
  };
  const handleClick = async () => {
    // Check if MetaMask is installed
    if (!(window as any).ethereum) {
      window.alert("Please install MetaMask first.");
      return;
    }

    if (!web3) {
      try {
        // Request account access if needed
        await (window as any).ethereum.enable();

        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        web3 = new Web3((window as any).ethereum);
      } catch (error) {
        window.alert("You need to allow MetaMask.");
        return;
      }
    }

    const coinbase = await web3.eth.getCoinbase();
    if (!coinbase) {
      window.alert("Please activate MetaMask first.");
      return;
    }

    const publicAddress = coinbase.toLowerCase();
    setLoading(true);
    setPublicAddress(publicAddress);
    setPublicAddressCookie(publicAddress);

    // Look if user with current publicAddress is already present on backend

    fetch(`http://127.0.0.1:8080/daoki/user/get-user-info`, {
      body: JSON.stringify({ publicAddress }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      // If yes, retrieve it. If no, create it.
      .then((response) =>
        response.data?.userId ? response : handleSignup(publicAddress)
      )
      // Popup MetaMask confirmation modal to sign message
      .then((response) =>
        handleSignMessage({
          publicAddress: response.data.walletPublicAddress,
          nonce: response.data.nonce,
        })
      )
      // Send signature to backend on the /auth route
      .then(handleAuthenticate)
      // Pass accessToken back to parent component (to save it in localStorage)
      .then(onLoggedIn)
      .catch((err) => {
        Modal.warning({
          title: "Error",
          content: err,
        });
        setLoading(false);
      });
  };

  const button = (
    <Button onClick={handleClick}>
      {publicAddress && authSuccess ? publicAddress : "Connect Wallet"}
    </Button>
  );
  return loading ? <LoadingCircle /> : button;
};

export default WalletButton;
