import { AuthLayout } from "../../components/layouts";
import { Grupoh } from "../../components";
import type { NextPage } from "next";

const Grupoh1: NextPage = () => {
  return (
    <AuthLayout title="Grupo H" aviso="true">
      <Grupoh />
    </AuthLayout>
  );
};

export default Grupoh1;
