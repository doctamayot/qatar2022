import { AuthLayout } from "../../components/layouts";
import { Grupod } from "../../components";
import type { NextPage } from "next";

const Grupod1: NextPage = () => {
  return (
    <AuthLayout title="Grupo D" aviso="true">
      <Grupod />
    </AuthLayout>
  );
};

export default Grupod1;
