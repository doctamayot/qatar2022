import { AuthLayout } from "../../components/layouts";
import { Grupoc } from "../../components";
import type { NextPage } from "next";

const Grupoc1: NextPage = () => {
  return (
    <AuthLayout title="Grupo C" aviso="true">
      <Grupoc />
    </AuthLayout>
  );
};

export default Grupoc1;
