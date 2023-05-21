import { Link } from "react-router-dom";
export const columns = [
  {
    title: "题号",
    dataIndex: "problem_id",
    bodyCellStyle: {
      width: 300,
    },
    sorter: (a, b) => a.problem_id - b.problem_id,
  },
  {
    title: "标题",
    dataIndex: "title",
    bodyCellStyle: {
      width: 300,
    },
    render: (text, record) => (
      <div>
        <Link to={`/problems/${record.problem_id}`} className="list">
          <span>{text}</span>
        </Link>
      </div>
    ),
  },
  {
    title: "等级",
    dataIndex: "level",
  },
];
