export async function search_data(url) {
  const data = await (
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
  ).json();
  console.log(data.data);
  return data.data;
}
