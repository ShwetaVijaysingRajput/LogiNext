import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  Link,
  Stack,
} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { AppContext } from "../../context";
export default function UserCard({ id, name, email, phone, website, liked }) {
  const { editHandler, deleteHandler, likeHandler } = useContext(AppContext);
  return (
    <Card sx={{ width: 250, margin: "10px" }} variant="outlined">
      <Box
        display="flex"
        justifyContent="center"
        style={{ backgroundColor: "#fafafa" }}
      >
        <CardMedia
          sx={{ height: 140, width: 100 }}
          image={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
          title="green iguana"
        />
      </Box>
      <CardContent p={5}>
        <Typography
          as={"h2"}
          fontSize={20}
          mb={2}
          fontWeight={"bold"}
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {name}
        </Typography>
        <Stack direction={"column"} spacing={2}>
          <Stack direction={"row"} spacing={2}>
            <MailOutlineRoundedIcon />
            <Link
              fontSize={14}
              rel="noopener"
              underline="hover"
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
              href={`mailto:${email}`}
            >
              {email}
            </Link>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <PhoneEnabledOutlinedIcon />
            <Link
              fontSize={14}
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
              href={`tel:${email}`}
            >
              {phone}
            </Link>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <LanguageOutlinedIcon />
            <Link
              fontSize={14}
              rel="noreferrer"
              underline="hover"
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
              href={website}
              target="_blank"
            >
              {website}
            </Link>
          </Stack>
        </Stack>
      </CardContent>
      <Divider flexItem variant="middle" />
      <CardActions>
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          style={{ display: "flex", justifyContent: "space-evenly" }}
          fullWidth
        >
          <IconButton
            aria-label="like"
            color="red"
            onClick={() => likeHandler(id)}
          >
            {liked ? (
              <FavoriteOutlinedIcon sx={{ fill: "red" }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
          <Divider orientation={"vertical"} variant={"middle"} flexItem />
          <IconButton
            aria-label="like"
            color="red"
            onClick={() => editHandler(id)}
          >
            <BorderColorOutlinedIcon />
          </IconButton>
          <Divider orientation={"vertical"} variant={"middle"} flexItem />
          <IconButton
            aria-label="like"
            color="red"
            onClick={() => deleteHandler(id)}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
