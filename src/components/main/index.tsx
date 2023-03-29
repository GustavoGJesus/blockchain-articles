// styles
import { Button, MainContainer, MainContent, MainText } from "./styles";

// components
import { ParagraphText } from "../shared/texts/paragraph";
import { TitleText } from "../shared/texts/title";

// libs
import { ethers } from "ethers";
import { toast } from "react-toastify";

// images
import TokenIcon from "../../assets/token-icon.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Main() {
  const [sucess, setSucess] = useState<boolean>();
  const [messageError, setMessageError] = useState<string>("");
  const [wallet, setWallet] = useState<string>();

  const navigate = useNavigate();

  function connectWallet() {
    if (!window.ethereum) {
      return toast.error("No Metamask wallet found! 😭", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // return setMessageError("No Metamask wallet found! 😭");
    } else {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      provider
        .send("eth_requestAccounts", [])
        .then((accounts) => {
          if (!accounts || !accounts.length) {
            toast.error("Wallet not found or allowed 😥", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setSucess(false);
          }
          toast.success("Wallet connected successfully 🥳", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setSucess(true);
          localStorage.setItem("@walletAddress:", accounts[0]);
          setWallet(accounts[0]);
          navigate("/articles-list");
        })
        .catch((err) =>
          toast.error("Wallet not found or allowed 😥", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }), 
        );
    }
  }

  return (
    <MainContainer>
      <MainContent>
        <MainText>
          <TitleText>Plant Article Web3</TitleText>

          <ParagraphText>
            Write articles to help the web3 community and earn the plant token
            <br />
            Connect your wallet, for start write!
          </ParagraphText>
          <Link to="/articles-list">
            <Button onClick={connectWallet}>Connect Wallet</Button>
          </Link>
        </MainText>
        <img src={TokenIcon} alt="icon token" />
      </MainContent>
    </MainContainer>
  );
}
