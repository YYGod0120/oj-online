import { Link } from "react-router-dom";
export async function getProblem_id(url, body) {
  const rep = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  });
  const data0 = await rep.json();
  console.log(data0);
  return data0.data;
}

export const columns = [
  {
    title: "题目",
    dataIndex: "title",
    render: (text, record) => (
      <div>
        <Link to={`/problems/${record.problem_id}`} className="list">
          <span>{text}</span>
        </Link>
      </div>
    ),
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
