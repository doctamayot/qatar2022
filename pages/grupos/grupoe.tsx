import { AuthLayout } from "../../components/layouts";
import { Grupoe } from "../../components";
import type { NextPage } from "next";

const Grupoe1: NextPage = () => {
  return (
    <AuthLayout title="Grupo E" aviso="true">
      <Grupoe />
    </AuthLayout>
  );
};

export default Grupoe1;
