function HashGenerator(hash) {
  const hashLength = hash.toString().length;

  if (hashLength === 1) {
    return `000${hash}`;
  } else if (hashLength === 2) {
    return `00${hash}`;
  } else if (hashLength === 3) {
    return `0${hash}`;
  } else {
    return hash;
  }
}

export default HashGenerator;
