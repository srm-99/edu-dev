function sleep(milli) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(milli);
    }, milli);
  });
}

// Ejemplo de uso
sleep(1000).then((valor) => {
  console.log("Pasaron", valor, "ms");
});


