import { AuthLayout } from "../../components/layouts";
import { Octavos } from "../../components";
import type { NextPage } from "next";

const Octavos1: NextPage = () => {
  return (
    <AuthLayout title="Finales" aviso="true">
      <Octavos />
    </AuthLayout>
  );
};

export default Octavos1;
