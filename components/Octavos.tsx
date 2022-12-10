import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession, signOut, signIn, getProviders } from "next-auth/react";

import { tesloApi } from "../axios";
import { useForm } from "react-hook-form";
import { LoadingPartido } from "./ui";

export const Octavos = () => {
  const [octavos, setOctavos] = useState<any>();
  const [cuartos, setCuartos] = useState<any>();
  const [formu, setFormu] = useState<any>();
  const [semis, setSemis] = useState<any>();
  const [final, setFinal] = useState<any>();
  const [result, setResult] = useState<any>();
  const [jugado, setJugado] = useState<any>();
  const [datosf, setDatosf] = useState<any>();
  const [cargando, setCargando] = useState<any>(false);
  const [botonenv, setbotonenv] = useState<any>(false);

  // const [checked, setChecked] = useState(true);
  const { data: session, status }: any = useSession();

  const [checkGroup, setCheckGroup] = useState({
    local: true,
    visitante: false,
  });

  const [checkGroup2, setCheckGroup2] = useState({
    local2: true,
    visitante2: false,
  });
  const [checkGroup11, setCheckGroup11] = useState({
    local11: true,
    visitante11: false,
  });
  const [checkGroup4, setCheckGroup4] = useState({
    local4: true,
    visitante4: false,
  });
  const [checkGroup3, setCheckGroup3] = useState({
    local3: true,
    visitante3: false,
  });
  const [checkGroup5, setCheckGroup5] = useState({
    local5: true,
    visitante5: false,
  });
  const [checkGroup6, setCheckGroup6] = useState({
    local6: true,
    visitante6: false,
  });
  const [checkGroup7, setCheckGroup7] = useState({
    local7: true,
    visitante7: false,
  });
  const [checkGroup8, setCheckGroup8] = useState({
    local8: true,
    visitante8: false,
  });
  const [checkGroup9, setCheckGroup9] = useState({
    local9: true,
    visitante9: false,
  });
  const [checkGroup10, setCheckGroup10] = useState({
    local10: true,
    visitante10: false,
  });
  const [checkGroup12, setCheckGroup12] = useState({
    local12: true,
    visitante12: false,
  });
  const [checkGroup13, setCheckGroup13] = useState({
    local13: true,
    visitante13: false,
  });
  const [checkGroup14, setCheckGroup14] = useState({
    local14: true,
    visitante14: false,
  });
  const [checkGroup15, setCheckGroup15] = useState({
    local15: true,
    visitante15: false,
  });
  const [checkGroup16, setCheckGroup16] = useState({
    local16: true,
    visitante16: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    getValues: getValues2,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
    getValues: getValues3,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register4,
    handleSubmit: handleSubmit4,
    formState: { errors: errors4 },
    getValues: getValues4,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register5,
    handleSubmit: handleSubmit5,
    formState: { errors: errors5 },
    getValues: getValues5,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register6,
    handleSubmit: handleSubmit6,
    formState: { errors: errors6 },
    getValues: getValues6,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register7,
    handleSubmit: handleSubmit7,
    formState: { errors: errors7 },
    getValues: getValues7,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register8,
    handleSubmit: handleSubmit8,
    formState: { errors: errors8 },
    getValues: getValues8,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register9,
    handleSubmit: handleSubmit9,
    formState: { errors: errors9 },
    getValues: getValues9,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register10,
    handleSubmit: handleSubmit10,
    formState: { errors: errors10 },
    getValues: getValues10,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register11,
    handleSubmit: handleSubmit11,
    formState: { errors: errors11 },
    getValues: getValues11,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register12,
    handleSubmit: handleSubmit12,
    formState: { errors: errors12 },
    getValues: getValues12,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register13,
    handleSubmit: handleSubmit13,
    formState: { errors: errors13 },
    getValues: getValues13,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register14,
    handleSubmit: handleSubmit14,
    formState: { errors: errors14 },
    getValues: getValues14,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  const {
    register: register15,
    handleSubmit: handleSubmit15,
    formState: { errors: errors15 },
    getValues: getValues15,
  } = useForm<any>({
    //defaultValues: "",4
  }) as any;
  const {
    register: register16,
    handleSubmit: handleSubmit16,
    formState: { errors: errors16 },
    getValues: getValues16,
  } = useForm<any>({
    //defaultValues: "",
  }) as any;

  useEffect(() => {
    async function fetchData() {
      //You can await here
      const data: any = await tesloApi({
        url: `/octavos/octavo1`,
        method: "GET",
        //data: grupo2 && grupo2.data[0].name,
      });

      setOctavos(data.data.octavos);
      setCuartos(data.data.cuartos);
      setSemis(data.data.semis);
      setFinal(data.data.finales);
      setDatosf(data.data.datosFinales);

      // ...
    }
    fetchData();
  }, [jugado, formu]);

  useEffect(() => {
    if (session && session.user.role === "Admin") {
      setbotonenv(false);
    } else {
      setbotonenv(true);
    }
  }, []);

  const onSubmit1 = async (form: any) => {
    if (parseInt(getValues("golocal")) > parseInt(getValues("golvisitante"))) {
      form.resultado = "local";
    } else if (
      parseInt(getValues("golocal")) < parseInt(getValues("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._id = octavos[0].partido._id;
    form._idoctavo = octavos[0]._id;
    form.jugado = true;
    form.nombre = octavos[0].partido.nombre;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/octavos/octavo1`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };
  const onSubmit2 = async (form: any) => {
    if (
      parseInt(getValues2("golocal")) > parseInt(getValues2("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues2("golocal")) < parseInt(getValues2("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local2 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    //form._id = octavos[0].partido._id;
    form._idoctavo = octavos[1]._id;
    form.jugado = true;
    form.nombre = octavos[1].partido.nombre;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/octavos/octavo2`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };
  const onSubmit3 = async (form: any) => {
    if (
      parseInt(getValues3("golocal")) > parseInt(getValues3("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues3("golocal")) < parseInt(getValues3("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local3 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = octavos[2]._id;
    form.nombre = octavos[2].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/octavos/octavo3`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };
  const onSubmit4 = async (form: any) => {
    if (
      parseInt(getValues4("golocal")) > parseInt(getValues4("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues4("golocal")) < parseInt(getValues4("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local4 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = octavos[3]._id;
    form.nombre = octavos[3].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/octavos/octavo4`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };
  const onSubmit5 = async (form: any) => {
    if (
      parseInt(getValues5("golocal")) > parseInt(getValues5("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues5("golocal")) < parseInt(getValues5("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local5 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = octavos[4]._id;
    form.nombre = octavos[4].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/octavos/octavo5`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };
  const onSubmit6 = async (form: any) => {
    if (
      parseInt(getValues6("golocal")) > parseInt(getValues6("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues6("golocal")) < parseInt(getValues6("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local6 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = octavos[5]._id;
    form.nombre = octavos[5].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/octavos/octavo6`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };
  const onSubmit7 = async (form: any) => {
    if (
      parseInt(getValues7("golocal")) > parseInt(getValues7("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues7("golocal")) < parseInt(getValues7("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local7 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = octavos[6]._id;
    form.nombre = octavos[6].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/octavos/octavo7`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };

  const onSubmit8 = async (form: any) => {
    if (
      parseInt(getValues8("golocal")) > parseInt(getValues8("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues8("golocal")) < parseInt(getValues8("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local8 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = octavos[7]._id;
    form.nombre = octavos[7].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/octavos/octavo8`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };

  const onSubmit9 = async (form: any) => {
    if (
      parseInt(getValues9("golocal")) > parseInt(getValues9("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues9("golocal")) < parseInt(getValues9("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local9 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = cuartos[0]._id;
    form.nombre = cuartos[0].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/cuartos/cuarto1`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };
  const onSubmit10 = async (form: any) => {
    if (
      parseInt(getValues10("golocal")) > parseInt(getValues10("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues10("golocal")) < parseInt(getValues10("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local10 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = cuartos[1]._id;
    form.nombre = cuartos[1].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `cuartos/cuarto2`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };

  const onSubmit11 = async (form: any) => {
    if (
      parseInt(getValues11("golocal")) > parseInt(getValues11("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues11("golocal")) < parseInt(getValues11("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local11 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = cuartos[2]._id;
    form.nombre = cuartos[2].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/cuartos/cuarto3`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };

  const onSubmit12 = async (form: any) => {
    if (
      parseInt(getValues12("golocal")) > parseInt(getValues12("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues12("golocal")) < parseInt(getValues12("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local12 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = cuartos[3]._id;
    form.nombre = cuartos[3].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/cuartos/cuarto4`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };

  const onSubmit13 = async (form: any) => {
    if (
      parseInt(getValues13("golocal")) > parseInt(getValues13("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues13("golocal")) < parseInt(getValues13("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local13 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = semis[0]._id;
    form.nombre = semis[0].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/semis/semis1`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };

  const onSubmit14 = async (form: any) => {
    if (
      parseInt(getValues14("golocal")) > parseInt(getValues14("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues14("golocal")) < parseInt(getValues14("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local14 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = semis[1]._id;
    form.nombre = semis[1].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/semis/semis2`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };

  const onSubmit15 = async (form: any) => {
    if (
      parseInt(getValues15("golocal")) > parseInt(getValues15("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues15("golocal")) < parseInt(getValues15("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local15 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = final[0]._id;
    form.nombre = final[0].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/finales/tercer`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };

  const onSubmit16 = async (form: any) => {
    if (
      parseInt(getValues16("golocal")) > parseInt(getValues16("golvisitante"))
    ) {
      form.resultado = "local";
    } else if (
      parseInt(getValues16("golocal")) < parseInt(getValues16("golvisitante"))
    ) {
      form.resultado = "visitante";
    } else {
      // if (local16 === true) {
      //   form.resultado = "local";
      // } else {
      //   form.resultado = "visitante";
      // }
      form.resultado = "empate";
    }
    form._idoctavo = final[1]._id;
    form.nombre = final[1].partido.nombre;
    form.jugado = true;
    setCargando(true);

    try {
      const { data } = await tesloApi({
        url: `/finales/final`,
        method: "PUT", // si tenemos un _id, entonces actualizar, si no crear
        data: form,
      });
    } catch (error) {
      console.log(error);
    }

    setCargando(false);

    setFormu(form);
  };

  const editar = async (id: any) => {
    setCargando(true);
    try {
      const { data } = await tesloApi({
        url: `/octavos/octavo1`,
        method: "PATCH", // si tenemos un _id, entonces actualizar, si no crear
        data: octavos && octavos[id].partido,
      });
      setJugado(data);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  const editarCuartos = async (id: any) => {
    setCargando(true);
    try {
      const { data } = await tesloApi({
        url: `/cuartos/cuarto1`,
        method: "PATCH", // si tenemos un _id, entonces actualizar, si no crear
        data: cuartos && cuartos[id].partido,
      });
      setJugado(data);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };
  const editarSemis = async (id: any) => {
    setCargando(true);
    try {
      const { data } = await tesloApi({
        url: `/semis/semis1`,
        method: "PATCH", // si tenemos un _id, entonces actualizar, si no crear
        data: semis && semis[id].partido,
      });
      setJugado(data);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  const editarFinales = async (id: any) => {
    setCargando(true);
    try {
      const { data } = await tesloApi({
        url: `/semis/semis1`,
        method: "PATCH", // si tenemos un _id, entonces actualizar, si no crear
        data: final && final[id].partido,
      });
      setJugado(data);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  const { local, visitante } = checkGroup;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup({
      ...checkGroup,
      [event.target.name]: event.target.checked,
    });
  };

  const { local2, visitante2 } = checkGroup2;
  const { local3, visitante3 } = checkGroup3;
  const { local4, visitante4 } = checkGroup4;
  const { local5, visitante5 } = checkGroup5;
  const { local6, visitante6 } = checkGroup6;
  const { local7, visitante7 } = checkGroup7;
  const { local8, visitante8 } = checkGroup8;
  const { local9, visitante9 } = checkGroup9;
  const { local10, visitante10 } = checkGroup10;
  const { local11, visitante11 } = checkGroup11;
  const { local12, visitante12 } = checkGroup12;
  const { local13, visitante13 } = checkGroup13;
  const { local14, visitante14 } = checkGroup14;
  const { local15, visitante15 } = checkGroup15;
  const { local16, visitante16 } = checkGroup16;

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup2({
      ...checkGroup2,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup3({
      ...checkGroup3,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup4({
      ...checkGroup4,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup5({
      ...checkGroup5,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup6({
      ...checkGroup6,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup7({
      ...checkGroup7,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange8 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup8({
      ...checkGroup8,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange9 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup9({
      ...checkGroup9,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange10 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup10({
      ...checkGroup10,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange11 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup11({
      ...checkGroup11,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange12 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup12({
      ...checkGroup12,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange13 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup13({
      ...checkGroup13,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange14 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup14({
      ...checkGroup14,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange15 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup15({
      ...checkGroup15,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange16 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckGroup16({
      ...checkGroup16,
      [event.target.name]: event.target.checked,
    });
  };
  const puntoCuartos1 = async (id: any) => {
    setCargando(true);
    try {
      await tesloApi({
        url: `/finalesall`,
        method: "PUT",
        data: { nomb: "Cuartos 1" },
      });
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  const puntoCuartos2 = async (id: any) => {
    setCargando(true);
    try {
      await tesloApi({
        url: `/finalesall`,
        method: "PUT",
        data: { nomb: "Cuartos 2" },
      });
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };
  const puntoCuartos3 = async (id: any) => {
    setCargando(true);
    try {
      await tesloApi({
        url: `/finalesall`,
        method: "PUT",
        data: { nomb: "Cuartos 3" },
      });
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };
  const puntoCuartos4 = async (id: any) => {
    setCargando(true);
    try {
      await tesloApi({
        url: `/finalesall`,
        method: "PUT",
        data: { nomb: "Cuartos 4" },
      });
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };
  return (
    <>
      {cargando ? (
        <LoadingPartido />
      ) : (
        <Grid container sx={{ padding: "5px", marginTop: "40px" }}>
          <Box
            sx={{
              position: "absolute",
              top: "280px",
              right: "280px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image
              src="https://res.cloudinary.com/hugotamayo/image/upload/v1666234923/qatar/azhwx6u2xznmrvjn8vpp.png"
              alt="qatar"
              width={450}
              height={450}
            />
          </Box>
          {octavos && (
            <Grid item md={3} xs={12}>
              <Grid container>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {octavos && octavos[0].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit(onSubmit1)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          {octavos && (
                            <Image
                              src={octavos && octavos[0].partido.local.bandera}
                              alt={octavos && octavos[0].nombre}
                              width={60}
                              height={40}
                            />
                          )}
                          <Typography variant="subtitle1">
                            {octavos[0].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {octavos && octavos[0].partido.local.name}
                        </Typography>

                        <Checkbox
                          checked={local}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          fullWidth
                          //sx={{ width: "100px" }}
                          {...register("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors.golocal}
                          helperText={errors.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          variant="filled"
                          fullWidth
                          //sx={{ width: "100px" }}
                          {...register("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors.golvisitante}
                          helperText={errors.golvisitante?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />

                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {octavos && octavos[0].partido.visitante.name}
                        </Typography>

                        <Box>
                          {octavos && (
                            <Image
                              src={
                                octavos && octavos[0].partido.visitante.bandera
                              }
                              alt={octavos && octavos[0].nombre}
                              width={60}
                              height={40}
                            />
                          )}
                          <Typography variant="subtitle1">
                            {octavos[0].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {octavos && octavos[0].partido.jugado ? (
                          <Button
                            onClick={() => editar(0)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {octavos && octavos[1].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit2(onSubmit2)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          {octavos && (
                            <Image
                              src={octavos && octavos[1].partido.local.bandera}
                              alt={octavos && octavos[1].nombre}
                              width={60}
                              height={40}
                            />
                          )}
                          <Typography variant="subtitle1">
                            {octavos[1].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {octavos && octavos[1].partido.local.name}
                        </Typography>

                        <Checkbox
                          checked={local2}
                          onChange={handleChange2}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local2"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          fullWidth
                          //sx={{ width: "100px" }}
                          {...register2("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors2.golocal}
                          helperText={errors2.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          variant="filled"
                          fullWidth
                          //sx={{ width: "100px" }}
                          {...register2("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors2.golvisitante}
                          helperText={errors2.golvisitante?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local2}
                          onChange={handleChange2}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local2"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />

                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {octavos && octavos[1].partido.visitante.name}
                        </Typography>

                        <Box>
                          {octavos && (
                            <Image
                              src={
                                octavos && octavos[1].partido.visitante.bandera
                              }
                              alt={octavos && octavos[1].nombre}
                              width={60}
                              height={40}
                            />
                          )}
                          <Typography variant="subtitle1">
                            {octavos[1].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {octavos && octavos[1].partido.jugado ? (
                          <Button
                            onClick={() => editar(1)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {octavos && octavos[2].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit3(onSubmit3)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={octavos && octavos[2].partido.local.bandera}
                            alt={octavos && octavos[2].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[2].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {octavos && octavos[2].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local3}
                          onChange={handleChange3}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local3"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          fullWidth
                          //sx={{ width: "100px" }}
                          {...register3("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors3.golocal}
                          helperText={errors3.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register3("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors3.golocal}
                          helperText={errors3.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local3}
                          onChange={handleChange3}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local3"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {octavos && octavos[2].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              octavos && octavos[2].partido.visitante.bandera
                            }
                            alt={octavos && octavos[2].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[2].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {octavos && octavos[2].partido.jugado ? (
                          <Button
                            onClick={() => editar(2)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {octavos && octavos[3].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit4(onSubmit4)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={octavos && octavos[3].partido.local.bandera}
                            alt={octavos && octavos[3].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[3].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {octavos && octavos[3].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local4}
                          onChange={handleChange4}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local4"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register4("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors4.golocal}
                          helperText={errors4.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          variant="filled"
                          fullWidth
                          //sx={{ width: "100px" }}
                          {...register4("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors4.golocal}
                          helperText={errors4.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local4}
                          onChange={handleChange4}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local4"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {octavos && octavos[3].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              octavos && octavos[3].partido.visitante.bandera
                            }
                            alt={octavos && octavos[3].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[3].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {octavos && octavos[3].partido.jugado ? (
                          <Button
                            onClick={() => editar(3)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {octavos && octavos[4].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit5(onSubmit5)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={octavos && octavos[4].partido.local.bandera}
                            alt={octavos && octavos[4].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[4].partido.golocal}
                          </Typography>
                        </Box>

                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {octavos && octavos[4].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local5}
                          onChange={handleChange5}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local5"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register5("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors5.golocal}
                          helperText={errors5.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register5("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors5.golocal}
                          helperText={errors5.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local5}
                          onChange={handleChange5}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local5"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {octavos && octavos[4].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              octavos && octavos[4].partido.visitante.bandera
                            }
                            alt={octavos && octavos[4].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[4].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {octavos && octavos[4].partido.jugado ? (
                          <Button
                            onClick={() => editar(4)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {octavos && octavos[5].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit6(onSubmit6)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={octavos && octavos[5].partido.local.bandera}
                            alt={octavos && octavos[5].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[5].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {octavos && octavos[5].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local6}
                          onChange={handleChange6}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local6"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          fullWidth
                          //sx={{ width: "100px" }}
                          {...register6("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors6.golocal}
                          helperText={errors6.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register6("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors6.golocal}
                          helperText={errors6.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local6}
                          onChange={handleChange6}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local6"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {octavos && octavos[5].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              octavos && octavos[5].partido.visitante.bandera
                            }
                            alt={octavos && octavos[5].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[5].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {octavos && octavos[5].partido.jugado ? (
                          <Button
                            onClick={() => editar(5)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {octavos && octavos[6].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit7(onSubmit7)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={octavos && octavos[6].partido.local.bandera}
                            alt={octavos && octavos[6].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[6].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {octavos && octavos[6].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local7}
                          onChange={handleChange7}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local7"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />

                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register7("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors7.golocal}
                          helperText={errors7.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register7("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors7.golocal}
                          helperText={errors7.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local7}
                          onChange={handleChange7}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local7"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {octavos && octavos[6].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              octavos && octavos[6].partido.visitante.bandera
                            }
                            alt={octavos && octavos[6].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[6].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {octavos && octavos[6].partido.jugado ? (
                          <Button
                            onClick={() => editar(6)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {octavos && octavos[7].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit8(onSubmit8)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={octavos && octavos[7].partido.local.bandera}
                            alt={octavos && octavos[7].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[7].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {octavos && octavos[7].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local8}
                          onChange={handleChange8}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local8"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          variant="filled"
                          fullWidth
                          //sx={{ width: "100px" }}
                          {...register8("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors8.golocal}
                          helperText={errors8.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register8("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors8.golocal}
                          helperText={errors8.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local8}
                          onChange={handleChange8}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local8"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {octavos && octavos[7].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              octavos && octavos[7].partido.visitante.bandera
                            }
                            alt={octavos && octavos[7].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {octavos[7].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {octavos && octavos[7].partido.jugado ? (
                          <Button
                            onClick={() => editar(7)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                            type="submit"
                            color="primary"
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {cuartos && (
            <Grid item md={3} xs={12} display="flex" alignItems="center">
              <Grid container>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {cuartos && cuartos[0].name}
                    {/* <Button
                      variant="contained"
                      sx={{ marginLeft: "10px", marginRight: "10px" }}
                      type="submit"
                      color="primary"
                      disabled={botonenv}
                      onClick={puntoCuartos1}
                    >
                      puntos cuartos
                    </Button> */}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit9(onSubmit9)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={cuartos && cuartos[0].partido.local.bandera}
                            alt={cuartos && cuartos[0].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {cuartos[0].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {cuartos && cuartos[0].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local9}
                          onChange={handleChange9}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local9"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register9("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors9.golocal}
                          helperText={errors9.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register9("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors9.golocal}
                          helperText={errors9.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local9}
                          onChange={handleChange9}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local9"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {cuartos && cuartos[0].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              cuartos && cuartos[0].partido.visitante.bandera
                            }
                            alt={cuartos && cuartos[0].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {cuartos[0].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {cuartos && cuartos[0].partido.jugado ? (
                          <Button
                            onClick={() => editarCuartos(0)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {cuartos && cuartos[1].name}
                  </Typography>
                  {/* <Button
                    variant="contained"
                    sx={{ marginLeft: "10px", marginRight: "10px" }}
                    type="submit"
                    color="primary"
                    disabled={botonenv}
                    onClick={puntoCuartos2}
                  >
                    puntos cuartos
                  </Button> */}
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit10(onSubmit10)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={cuartos && cuartos[1].partido.local.bandera}
                            alt={cuartos && cuartos[1].nombre}
                            width={80}
                            height={60}
                          />
                          <Typography variant="subtitle1">
                            {cuartos[1].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {cuartos && cuartos[1].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local10}
                          onChange={handleChange10}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local10"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register10("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors10.golocal}
                          helperText={errors10.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register10("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors10.golocal}
                          helperText={errors10.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local10}
                          onChange={handleChange10}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local10"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />

                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {cuartos && cuartos[1].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              cuartos && cuartos[1].partido.visitante.bandera
                            }
                            alt={cuartos && cuartos[1].nombre}
                            width={80}
                            height={60}
                          />
                          <Typography variant="subtitle1">
                            {cuartos[1].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {cuartos && cuartos[1].partido.jugado ? (
                          <Button
                            onClick={() => editarCuartos(1)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {cuartos && cuartos[2].name}
                  </Typography>
                  {/* <Button
                    variant="contained"
                    sx={{ marginLeft: "10px", marginRight: "10px" }}
                    type="submit"
                    color="primary"
                    disabled={botonenv}
                    onClick={puntoCuartos3}
                  >
                    puntos cuartos
                  </Button> */}
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit11(onSubmit11)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={cuartos && cuartos[2].partido.local.bandera}
                            alt={cuartos && cuartos[2].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {cuartos[2].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {cuartos && cuartos[2].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local11}
                          onChange={handleChange11}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local11"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register11("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors11.golocal}
                          helperText={errors11.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register11("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors11.golocal}
                          helperText={errors11.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local11}
                          onChange={handleChange11}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local11"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {cuartos && cuartos[2].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              cuartos && cuartos[2].partido.visitante.bandera
                            }
                            alt={cuartos && cuartos[2].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {cuartos[2].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {cuartos && cuartos[2].partido.jugado ? (
                          <Button
                            onClick={() => editarCuartos(2)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {cuartos && cuartos[3].name}
                  </Typography>
                  {/* <Button
                    variant="contained"
                    sx={{ marginLeft: "10px", marginRight: "10px" }}
                    type="submit"
                    color="primary"
                    disabled={botonenv}
                    onClick={puntoCuartos4}
                  >
                    puntos cuartos
                  </Button> */}
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit12(onSubmit12)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={cuartos && cuartos[3].partido.local.bandera}
                            alt={cuartos && cuartos[3].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {cuartos[3].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {cuartos && cuartos[3].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local12}
                          onChange={handleChange12}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local12"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register12("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors12.golocal}
                          helperText={errors12.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register12("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors12.golocal}
                          helperText={errors12.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local12}
                          onChange={handleChange12}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local12"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {cuartos && cuartos[3].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={
                              cuartos && cuartos[3].partido.visitante.bandera
                            }
                            alt={cuartos && cuartos[3].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {cuartos[3].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {cuartos && cuartos[3].partido.jugado ? (
                          <Button
                            onClick={() => editarCuartos(3)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}

          {semis && (
            <Grid item md={3} xs={12} display="flex" alignItems="center">
              <Grid container>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {semis && semis[0].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit13(onSubmit13)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={semis && semis[0].partido.local.bandera}
                            alt={semis && semis[0].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {semis[0].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {semis && semis[0].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local13}
                          onChange={handleChange13}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local13"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register13("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors13.golocal}
                          helperText={errors13.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register13("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors13.golocal}
                          helperText={errors13.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local13}
                          onChange={handleChange13}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local13"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />

                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {semis && semis[0].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={semis && semis[0].partido.visitante.bandera}
                            alt={semis && semis[0].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {semis[0].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {semis && semis[0].partido.jugado ? (
                          <Button
                            onClick={() => editarSemis(0)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {semis && semis[1].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit14(onSubmit14)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={semis && semis[1].partido.local.bandera}
                            alt={semis && semis[1].nombre}
                            width={80}
                            height={60}
                          />
                          <Typography variant="subtitle1">
                            {semis[1].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {semis && semis[1].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local14}
                          onChange={handleChange14}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local14"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register14("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors14.golocal}
                          helperText={errors14.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register14("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors14.golocal}
                          helperText={errors14.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local14}
                          onChange={handleChange14}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local14"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {semis && semis[1].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={semis && semis[1].partido.visitante.bandera}
                            alt={semis && semis[1].nombre}
                            width={80}
                            height={60}
                          />
                          <Typography variant="subtitle1">
                            {semis[1].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {semis && semis[1].partido.jugado ? (
                          <Button
                            onClick={() => editarSemis(1)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {final && (
            <Grid item md={3} xs={12} display="flex" alignItems="center">
              <Grid container>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {final && final[0].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit15(onSubmit15)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={final && final[0].partido.local.bandera}
                            alt={final && final[0].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {final[0].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {final && final[0].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local15}
                          onChange={handleChange15}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local15"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register15("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors15.golocal}
                          helperText={errors15.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register15("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors15.golocal}
                          helperText={errors15.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local15}
                          onChange={handleChange15}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local15"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />

                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {final && final[0].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={final && final[0].partido.visitante.bandera}
                            alt={final && final[0].nombre}
                            width={60}
                            height={40}
                          />
                          <Typography variant="subtitle1">
                            {final[0].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {final && final[0].partido.jugado ? (
                          <Button
                            onClick={() => editarFinales(0)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{
                      fontSize: "30px",
                      padding: 4,
                      fontFamily: "'Yanone Kaffeesatz', sans-serif",
                    }}
                  >
                    {final && final[1].name}
                  </Typography>
                  <Grid
                    container
                    sx={{ backgroundColor: "#bbb7be33", padding: "10px" }}
                  >
                    <form onSubmit={handleSubmit16(onSubmit16)}>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#7e7720", fontSize: "15px" }}
                      >
                        En caso de empate, si cree que gana el local al final
                        deje en verde el cuadro al lado del equipo local, si
                        cree que gana el visitante deje vacio el mismo cuadro
                      </Typography>
                      <Grid item xs={12} display="flex" alignItems="center">
                        <Box>
                          <Image
                            src={
                              final &&
                              final[1] &&
                              final[1].partido.local.bandera
                            }
                            alt={final && final[1].nombre}
                            width={80}
                            height={60}
                          />
                          <Typography variant="subtitle1">
                            {final[1].partido.golocal}
                          </Typography>
                        </Box>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          {final && final[1].partido.local.name}
                        </Typography>
                        <Checkbox
                          checked={local16}
                          onChange={handleChange16}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local16"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register16("golocal", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors16.golocal}
                          helperText={errors16.golocal?.message}
                        />
                        <TextField
                          type="number"
                          style={{
                            height: 40,
                            marginBottom: "30px",
                            marginTop: "20px",
                            marginLeft: "5px",
                          }}
                          fullWidth
                          variant="filled"
                          //sx={{ width: "100px" }}
                          {...register16("golvisitante", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 1,
                              message: "Mínimo 1 numero",
                            },
                          })}
                          size="small"
                          error={!!errors16.golocal}
                          helperText={errors16.golocal?.message}
                        />
                        <Checkbox
                          sx={{ display: "none" }}
                          checked={!local16}
                          onChange={handleChange16}
                          inputProps={{ "aria-label": "controlled" }}
                          name="local16"
                          // disabled={visitante ? true : false}
                          size={"small"}
                        />
                        <Typography
                          component="span"
                          variant="subtitle1"
                          sx={{ fontWeight: "bold", margin: "0 10px 0 10px" }}
                        >
                          {final && final[1].partido.visitante.name}
                        </Typography>
                        <Box>
                          <Image
                            src={final && final[1].partido.visitante.bandera}
                            alt={final && final[1].nombre}
                            width={80}
                            height={60}
                          />
                          <Typography variant="subtitle1">
                            {final[1].partido.golvisitante}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} textAlign="center">
                        {final && final[1].partido.jugado ? (
                          <Button
                            onClick={() => editarFinales(1)}
                            variant="contained"
                            color="warning"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            disabled={botonenv}
                          >
                            editar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ marginLeft: "10px", marginRight: "10px" }}
                            type="submit"
                            color="primary"
                            disabled={botonenv}
                          >
                            Enviar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: "10px" }}>
                  <Box>Campeon: {datosf[0] && datosf[0].campeon.name}</Box>
                  <Box>SubCampeon: {datosf[0] && datosf[0].sub.name}</Box>
                  <Box>tercero: {datosf[0] && datosf[0].tercero.name}</Box>
                  <Box>cuarto: {datosf[0] && datosf[0].cuarto.name}</Box>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};
