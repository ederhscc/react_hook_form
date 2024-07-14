import { useForms } from "../hooks/useForms";
import { FormSchema } from "../schemas/formSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          placeholder="Digite o seu nome"
          {...register("name")}
        />
        {errors.name && <small>{errors.name.message}</small>}
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Form;
