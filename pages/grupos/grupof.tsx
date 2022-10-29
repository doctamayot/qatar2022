import { AuthLayout } from "../../components/layouts";
import { Grupof } from "../../components";
import type { NextPage } from "next";

const Grupof1: NextPage = () => {
  return (
    <AuthLayout title="Grupo F" aviso="true">
      <Grupof />
    </AuthLayout>
  );
};

export default Grupof1;
