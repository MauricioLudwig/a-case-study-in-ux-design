import { useState, useEffect } from "react";
import { Col, Form, Row, Select, Typography } from "antd";
import { Configuration } from "../../components/Configuration";
import { getUsers } from "./__fixture__";

const { Option } = Select;
const { Title } = Typography;

const options: ReadonlyArray<number> = [1000, 5000, 100000, 1e6].sort(
  (a, b) => a - b
);

export const SearchEngine = () => {
  const [users, setUsers] = useState<Array<string>>([]);
  const [count, setCount] = useState(options[0]);

  useEffect(() => {
    setUsers(getUsers(count));
  }, [count]);

  return (
    <div>
      <Row justify="center">
        <Col span={12}>
          <Title level={3}>{`Total users: ${users.length}`}</Title>
        </Col>
      </Row>
      <Configuration>
        <Form>
          <Form.Item>
            <Select value={count} onChange={(value) => setCount(value)}>
              {options.map((o) => (
                <Option key={o} value={o}>
                  {o}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Configuration>
    </div>
  );
};
