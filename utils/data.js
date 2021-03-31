async function dataFetch() {
  try {
    fetch("api", {
      headers: {
        "Content-Type": "applications/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data) => console.log("stories", stories)

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      );
  } catch (e) {
    return null;
  }
}

export { dataFetch };
