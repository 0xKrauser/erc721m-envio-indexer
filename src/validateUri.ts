export function validateUri(str: string) {
  let url;

  try {
    url = new URL(str);
  } catch (_) {
    return undefined;
  }

  if (url.protocol === "http:" || url.protocol === "https:") {
    return url.toString();
  }

  if (url.protocol === "ar:") {
    const path = url.href.replace(/(^\w+:|^)\/\//, "");

    return `https://gateway.irys.xyz/${path}`;
  }

  if (url.protocol === "ipfs:") {
    const path = url.href.replace(/(^\w+:|^)\/\//, "");

    return `https://ipfs.cf-ipfs.com/${path}`;
  }

  return undefined;
}
