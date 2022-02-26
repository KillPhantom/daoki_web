type ThenArg<T> = T extends PromiseLike<infer U>
  ? U
  : T extends (...args: any) => PromiseLike<infer V>
  ? V
  : T;

export type GetFulfilledActionType<
  TActionCreator extends (...args: any) => {
    type: string;
    payload: Promise<any> | (() => Promise<any>);
  },
  TAction extends {
    type: string;
    payload: Promise<any> | (() => Promise<any>);
  } = ReturnType<TActionCreator>
> = Omit<TAction, "type" | "payload"> & {
  type: `${TAction["type"]}_FULFILLED`;
  payload: ThenArg<TAction["payload"]>;
};

export type GetPendingActionType<
  TActionCreator extends (...args: any) => {
    type: string;
    payload: Promise<any> | (() => Promise<any>);
  },
  TAction extends {
    type: string;
    payload: Promise<any> | (() => Promise<any>);
  } = ReturnType<TActionCreator>
> = Omit<TAction, "type"> & {
  type: `${TAction["type"]}_PENDING`;
};

export type GetRejectedActionType<
  TActionCreator extends (...args: any) => {
    type: string;
    payload: Promise<any> | (() => Promise<any>);
  },
  TAction extends {
    type: string;
    payload: Promise<any> | (() => Promise<any>);
  } = ReturnType<TActionCreator>
> = Omit<TAction, "type" | "payload"> & {
  type: `${TAction["type"]}_REJECTED`;
  payload: ThenArg<TAction["payload"]>;
};
