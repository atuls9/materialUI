import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/* use h4 variant but  underlying HTML tag is h1 
      after inspect ||
      <h1 class="MuiTypography-root MuiTypography-h4 css-5lbw0b-MuiTypography-root">h4 Heading</h1>*/}
      <Typography variant="h4" component="h1">
        h4 Heading
      </Typography>

      {/* gutterbottom give margin at bottom --> this is helpful whiel giving heading */}
      <Typography variant="h5" gutterBottom>
        h5 Heading
      </Typography>

      {/* P HTML element body1=> default and 16px and body2 */}
      <Typography variant="body1">
        Body 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Corrupti, quod laborum modi est ipsum doloribus facere enim veritatis
        magni nulla illum debitis possimus rerum perspiciatis nobis eveniet.
        Ipsam, saepe doloribus dignissimos corporis aspernatur dolores deleniti
        error tempora quam nesciunt natus, consectetur exercitationem, minus
        aliquam. Exercitationem quos ad quibusdam molestiae magni!
      </Typography>
      <Typography variant="body2">
        Body 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Recusandae aliquid tenetur velit! Ipsa, recusandae fuga pariatur beatae
        corrupti accusantium assumenda ea aliquid voluptatum! Adipisci non atque
        accusamus iusto esse perferendis quidem, eius autem totam, qui magnam
        beatae velit, in incidunt asperiores! Sit, hic laudantium iusto quia
        modi quibusdam quo rerum.
      </Typography>
    </div>
  );
};
