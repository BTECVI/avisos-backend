import pool from '@src/libs/pg.pool';
import generateUUID from '@src/libs/generateHash';
interface data {
  user: string;
  pass: string;
}
export default async function crearSesion({ user, pass }: data) {
  try {
    const query = await pool.query(
      `SELECT id, password FROM public.staff WHERE user_name = '${user}' AND password = '${pass}';`
    );
    if(!query.rows[0]) throw 'Nombre de usuario o contraseña no válidos'
    
    const { id, password } = query.rows[0];
    if (password !== pass)
      return { status: 400, data: `null acces with id: ${id}` };

    const finishAtTime = new Date().getTime();
    const clave = generateUUID();

    const newquery = await pool.query(
      `INSERT INTO public.tokens(id_user, timestamp_generated, token) VALUES (${id}, '${finishAtTime}', '${clave}')`
    );

    if (newquery.rowCount === 1) {
      return {
        status: 200,
        data: { clave }
      };
    } 
    else {
      throw 'Falla desconocida, hubo error al momento de crear el token de autentificación';
    }

  } catch (error) {
    return { status: 400, data: { error: [error] }};
  }
}

// Infrastructura hay que cambiarla, por el id de la escuela donde se verifique que
