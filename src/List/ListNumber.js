import { Link } from "react-router-dom";
export const columns = [
  {
    title: "题号",
    dataIndex: "problem_id",
    sorter: (a, b) => a.problem_id - b.problem_id,
  },
  {
    title: "标题",
    dataIndex: "name",
    bodyCellStyle: {
      width: 500,
    },
    render: (text, record) => (
      <div>
        <Link to={`/problems/${record.problem_id}`}>
          <span>{text}</span>
        </Link>
      </div>
    ),
  },
];
export const data = [
  {
    key: "1",
    problem_id: 1000,
    name: "入门一",
  },
  {
    key: "2",
    problem_id: 1001,
    name: "入门二",
  },
  {
    key: "3",
    problem_id: 1002,
    name: "入门三",
  },
  {
    key: "4",
    problem_id: 1003,
    name: "[NOIP2001] 最大公约数和最小公倍数问题",
  },
  {
    key: "5",
    problem_id: 1004,
    name: "入门五",
  },
  {
    key: "6",
    problem_id: 1005,
    name: "123",
  },
  {
    key: "7",
    problem_id: 1006,
    name: "入门9",
  },
  {
    key: "8",
    problem_id: 1007,
    name: "入门三",
  },
  {
    key: "9",
    problem_id: 1008,
    name: "[NOIP2001] 最大公约数和最小公倍数问题",
  },
  {
    key: "10",
    problem_id: 1009,
    name: "入门五",
  },
  {
    key: "11",
    problem_id: 1010,
    name: "123",
  },
  {
    key: "12",
    problem_id: 1011,
    name: "入门9",
  },
];
