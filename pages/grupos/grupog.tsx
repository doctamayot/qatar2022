import { AuthLayout } from "../../components/layouts";
import { Grupog } from "../../components";
import type { NextPage } from "next";

const Grupog1: NextPage = () => {
  return (
    <AuthLayout title="Grupo G" aviso="true">
      <Grupog />
    </AuthLayout>
  );
};

export default Grupog1;
