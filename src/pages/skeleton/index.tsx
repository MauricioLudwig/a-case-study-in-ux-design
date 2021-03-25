import { useState } from "react";
import {
  Form,
  Switch,
  Skeleton as SkeletonUI,
  Row,
  Col,
  Input,
  Button,
  Typography,
} from "antd";
import { Configuration } from "../../components/Configuration";

const { Title } = Typography;

export const Skeleton = () => {
  const [values, setValues] = useState({
    loading: true,
    active: true,
  });

  const handleOnSwitch = (value: boolean, name: string) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { loading, active } = values;

  return (
    <div style={{ paddingTop: "6rem" }}>
      <Row justify="center">
        <Col span={8}>
          {loading ? (
            <>
              <SkeletonUI active={active} paragraph={{ rows: 6 }} />
              <SkeletonUI.Button active={active} />
            </>
          ) : (
            <Form>
              <Form.Item>
                <Title level={3}>Form</Title>
              </Form.Item>
              <Form.Item>
                <Input placeholder="Full name" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <Input.TextArea placeholder="Many a book is like a key to unknown chambers within the castle of one’s own self." />
              </Form.Item>
              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          )}
        </Col>
      </Row>
      <Configuration>
        <Form.Item label="Loading">
          <Switch
            checked={loading}
            onChange={(value) => handleOnSwitch(value, "loading")}
          />
        </Form.Item>
        <Form.Item label="Active">
          <Switch
            checked={active}
            onChange={(value) => handleOnSwitch(value, "active")}
          />
        </Form.Item>
      </Configuration>
    </div>
  );
};
