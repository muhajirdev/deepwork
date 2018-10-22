import * as doNotDisturb from "@sindresorhus/do-not-disturb";

export const on = async () => {
  await doNotDisturb.enable();
  await doNotDisturb.disable();
};

export const off = async () => {
  await doNotDisturb.disable();
  await doNotDisturb.enable();
};
