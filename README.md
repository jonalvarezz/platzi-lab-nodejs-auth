<p align="center">
  <a href="https://platzi.com/cursos/platzi-lab-nodejs-auth/" target="_blank">
    <img alt="Laboratorio de Node.js Auth" src="https://static.platzi.com/media/achievements/piezas-platzi-lab-nodejs-auth-apollo-server-prisma-cms_badge-5995d28d-302e-4bdd-bd86-e49a1b.png" width="60" />
  </a>
  <a href="https://platzi.com/cursos/platzi-lab-nodejs-auth/" target="_blank">
    <img alt="Curso de Next.js con GraphQL" src="https://static.platzi.com/media/achievements/piezas-platzi-lab-nodejs-auth_badge-cbeed361-b95b-439e-a48b-ce024f85384e.png" width="60" />
  </a>
</p>
<h1 align="center">
  Laboratorio Profesional de Node.js: Autenticaci贸n
</h1>

Este repositorio contiene el proyecto con el reto para el Laboratorio Profesional de Node.js: Autenticaci贸n, dictado por [@jonalvarezz](https://twitter.com/jonalvarezz) para [Platzi](https://platzi.com).

## 馃憠 El Reto.

Es nuestra primer semana en la empresa "ACME" y nos han pedido finalizar este proyecto que ha quedado abandonado e incompleto.

Desafortunadente, nadie en la empresa sabe del proyecto y es nuestra responsabilidad adue帽arnos de 茅ste y sacarlo adelante. 驴Podr谩s hacerlo?

De nuestro "Project Manager", que tambi茅n es nuevo en la empresa, sabemos lo siguiente:

1. El prop贸sito de la aplicaci贸n es permitir crear, actualizar, y eliminar Perfiles de usuario. Los usuarios deber谩n registrarse primero e iniciar sesi贸n para ser autenticados.
1. Al momento, solo existe el Backend para registrarse (sign up) e iniciar sesi贸n (login).
1. Escuch茅, dice nuestro Project Manager, que a煤n con lo poco que tiene la aplicaci贸n, es muy insegura. Fue echa de af谩n. Tiene un grav铆simo error de seguridad. S贸lo se sabe que es relacionado a c贸mo se guarda cierta informaci贸n en la base de datos.
1. Nuestra primera prioridad es encontrar por qu茅 es insegura y arreglarlo.
1. Luego, completar el Backend para que las funcionalidades de crear, modificar y eliminar un Perfil trabajen correctamente.
1. Aunque ten cuidado, solo usuarios autenticados pueden acceder a su perfil. As铆 que deber谩s idear antes alguna forma para saber si el usuario inici贸 sesi贸n e identificar qui茅n es.

### Retos opcionales

Mientras ibamos por algo de caf茅, nos topamos con nuestro nuestro Project Manager que nos dice:

1. Estar铆a genial si podemos agregar los tests necesarios para asegurar la funcionalidad y proteger ante futuros bugs de todo lo que haremos.
1. Ahora, no recuerdo si _tambi茅n trabajas en el Frontend_, si es as铆, 驴te animas a crear la UI con la que los visitantes puedan interactuar para utilizar la aplicaci贸n? Tienes plena libertad creativa para hacerlo. Conf铆o en ti.
1. Finalmente, 驴c贸mo presentaremos este proyecto a las directivas? 驴Podr铆as subirlo a internet para que podamos probarlo desde alguna URL? Servicios gratuitos como [Render](https://render.com), o [Fly.io](https://fly.io), combinado con [MongoDB Atlas](https://www.mongodb.com/pricing) nos podr铆an servir.

### Lo que sabemos de la aplicaci贸n

- El proyecto fue creado en una estructura de [Monorepo utilizando NPM](https://docs.npmjs.com/cli/v7/using-npm/workspaces).
- El Frontend se encuentra en la carpeta `frontend`. Aunque est谩 totalmente vacia.
- El Backend se encuentra en la carpeta `api`.
- El Backend es una aplicaci贸n t铆pica de Node.js usando el framework de Express. Adem谩s de otras utilidades.
- Hay una conexi贸n a una base de datos MongoDB.
- En el archivo [README del Backend](https://github.com/jonalvarezz/platzi-lab-nodejs-auth/tree/challenge/api) hay detalles sobre como instalar y correr el proyecto localmente.

## 馃悶 Encontraste un error o mejora?

Ayuda a otros estudiantes con eso que acabas de descubrir que har铆a este curso y respositorio mucho mejor.

- En [Issues](https://github.com/jonalvarezz/platzi-lab-nodejs-auth/issues/new) puedes reportar errores, agregar sugerencias y comentarios.
- Por su parte, los [Pull Request](https://github.com/jonalvarezz/platzi-lab-nodejs-auth/pulls) siempre estar谩n abiertos para recibir mejoras puntuales.

Happy hacking!
