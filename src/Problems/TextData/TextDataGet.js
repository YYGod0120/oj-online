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

export async function delete_data(url) {
  const data = await (
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
  ).json();
  console.log(data);
  return data;
}
export async function add_data(url, body) {
  const data = await (
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })
  ).json();
  console.log(data);
  return data.data.test_id;
}
export async function update_data(url, body) {
  const data = await (
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })
  ).json();
  console.log(data);
  return data;
}
