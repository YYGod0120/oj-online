const problem_id_url = "http://47.108.221.20:2333/submission/search";
const problem_url = "http://47.108.221.20:2333/problem/search";
const user_id = localStorage.getItem("userId") - 0;
async function getProblem_id(url) {
  const rep = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({
      user_id: user_id,
    }),
  });
  const data0 = await rep.json();
  console.log(data0.data.problem_id);
  return data0.data.problem_id;
}

export const columns = [
  {
    title: "题目",
    dataIndex: "title",
  },
  {
    title: "提交结果",
    dataIndex: "status",
  },
  {
    title: "代码语言",
    dataIndex: "language",
  },
  {
    title: "提交时间",
    dataIndex: "submit_time",
  },
  {
    title: "难度",
    dataIndex: "level",
  },
];
console.log(columns);
