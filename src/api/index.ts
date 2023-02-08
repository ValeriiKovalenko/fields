import ky from "ky";

export type IModeName = "Easy" | "Normal" | "Hard";

export interface IMode {
  name: IModeName;
  field: number;
}
export const getModeList = async () => {
  try {
    const modeList = (await ky
      .get("https://demo7919674.mockable.io")
      .json()) as IMode[];
    return modeList;
  } catch (err) {
    console.log(err);
    return null;
  }
};
