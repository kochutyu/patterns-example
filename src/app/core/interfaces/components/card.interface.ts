export interface ICard {
  imgUrl: string;
  title: string;
  description: string;
  btn: IBtn;
}

interface IBtn {
  btnName: string;
  route?: Array<string>;
}
