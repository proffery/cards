export const convertUrlToFile = async (url: string) =>
  new File([await (await fetch(url)).blob()], url)
