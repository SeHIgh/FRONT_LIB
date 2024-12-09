import {
  Avatar,
  Box,
  Button,
  Fade,
  IconButton,
  Popper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../img/close.svg";
import { ReactComponent as SettingIcon } from "../../img/setting.svg";
import { ReactComponent as LogoutIcon } from "../../img/logout.svg";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "rgb(247, 247, 247)",
  border: "2px solid #acb9cc5e",
  borderRadius: "20px",
  boxShadow: 24,
  p: 1,
  pb: 3,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 2,
};

const flex_row = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const flex_col = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

const btn_container = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  bgcolor: "transparent",
  borderRadius: "18px",
  overflow: "hidden",
  mt: 2,
};

const profile_btn = {
  flex: 1,
  fontSize: "16px",
  fontWeight: "900",
  color: "#305673",
  "&:hover": {
    bgcolor: "#ACB9CC",
  },
};

// 사용자 이름에 따른 프로필 사진 자동지정
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    // 이름이 1.두단어 형태 : 각단어의 맨앞 2.한단어 형태 : 맨앞
    children: name.includes(" ")
      ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
      : `${name[0]}`,
  };
}

export default function ProfileModal() {
  //{open,
  // setOpen,
  // user,
  // anchorEl,
  // setAnchorEl,
  // placement,
  // setPlacement,}
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [placement, setPlacement] = useState("right-end");
  const user = {
    name: "홍길동",
    email: "hong@example.com",
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    // 실 사용시
    // localStorage.removeItem("user");
    // navigate("/login");
    // 테스트 용
    alert("로그아웃 되었습니다");
  };

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Popper를 열기 위한 버튼 추가 */}
      <Button onClick={handleClick("right-end")}>프로필 열기</Button>

      <Popper
        sx={{ zIndex: 1200 }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        modifiers={[
          {
            name: "flip",
            enabled: true,
            options: {
              altBoundary: true,
              rootBoundary: "viewport",
              padding: 8,
            },
          },
          {
            name: "preventOverflow",
            enabled: true,
            options: {
              altAxis: false,
              altBoundary: true,
              tether: true,
              rootBoundary: "viewport",
              padding: 8,
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={style}>
              <Box sx={flex_row}>
                <Box sx={{ width: "40px" }}></Box>
                <Typography
                  sx={{
                    flex: 1,
                    textAlign: "center",
                    color: "var(--mid-color)",
                    fontWeight: "600",
                  }}
                >
                  {user.email}
                </Typography>
                <IconButton onClick={handleClick}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={flex_col}>
                {/* 사용자 프로필 사진 : 빈(기본) */}
                <Avatar
                  {...stringAvatar(`${user.name}`)}
                  src="/broken-image.jpg"
                  sx={{ width: "60px", height: "60px", mb: 1 }}
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {user.name} 님
                </Typography>
              </Box>
              <Box sx={btn_container}>
                <Button
                  sx={profile_btn}
                  startIcon={<SettingIcon />}
                  onClick={() =>
                    // 실 사용시
                    // navigate("/setting")
                    // 테스트 용
                    alert("개인 설정 페이지로 이동합니다")
                  }
                >
                  개인 설정
                </Button>
                <Button
                  sx={profile_btn}
                  startIcon={<LogoutIcon />}
                  onClick={handleLogout}
                >
                  로그아웃
                </Button>
              </Box>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
