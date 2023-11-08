import React, { Component } from "react";
import tether from "../tether.png";
import Airdrop from "./Airdrop";

class Main extends Component {
  render() {
    const tableStyle = {
      width: "100%",
      marginBottom: "1rem",
      color: "white",
      //backgroundColor: "black",
      borderRadius: "10px",
      animation: "fadeIn 1s ease",
    };

    const headerCellStyle = {
      backgroundColor: "#ff7e5f",
      borderBottom: "2px solid #feb47b",
      animation: "fadeIn 1s ease",
      color: "white",
    };

    const cellStyle = {
      padding: "1rem",
      textAlign: "center",
      borderBottom: "1px solid #666",
      borderRight: "1px solid #666",
      borderLeft: "1px solid #666",
      animation: "fadeIn 1s ease",
    };

    return (
      <div id="content" className="mt-3">
        <table style={tableStyle} className="text-mutes text-center">
          <thead>
            <tr style={headerCellStyle}>
              <th scope="col">Staking Balance</th>
              <th scope="col">Reward Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>
                {window.web3.utils.fromWei(this.props.stakingBalance, "Ether")}{" "}
                USDT
              </td>
              <td style={cellStyle}>
                {window.web3.utils.fromWei(this.props.rwdBalance, "Ether")} RWD
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mb-2" style={{ opacity: ".9" }}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              let amount;
              amount = this.input.value.toString();
              amount = window.web3.utils.toWei(amount, "Ether");
              this.props.stakeTokens(amount);
            }}
            className="mb-3"
          >
            <div style={{ borderSpacing: "0 1em" }}>
              <label
                className="float-left"
                style={{ marginLeft: "15px", color: "white" }}
              >
                <b>Stake Tokens</b>
              </label>
              <span
                className="float-right"
                style={{ marginRight: "8px", color: "white" }}
              >
                Balance:{" "}
                {window.web3.utils.fromWei(this.props.tetherBalance, "Ether")}{" "}
                Tether
              </span>
              <div className="input-group mb-4">
                <input
                  ref={(input) => {
                    this.input = input;
                  }}
                  type="text"
                  placeholder="enter amount to deposit"
                  required
                />
                <div className="input-group-open">
                  <div
                    className="input-group-text"
                    style={{ backgroundColor: "black", color: "yellow" }}
                  >
                    <img src={tether} alt="tether" height="32" />
                    &nbsp;&nbsp;&nbsp; USDT
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                style={{
                  backgroundColor: "brown",
                  color: "white",
                  transition: "all 0.3s ease",
                  fontSize: "1.5em",
                  marginBottom: "20px",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                DEPOSIT
              </button>
            </div>
          </form>
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault(this.props.unstakeTokens());
            }}
            className="btn btn-primary btn-lg btn-block"
            style={{
              backgroundColor: "brown",
              color: "white",
              transition: "all 0.3s ease",
              fontSize: "1.5em",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            WITHDRAW
          </button>
          <div
            className="card-body text-center mt-4"
            style={{
              color: "white",
              background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              animation: "fadeIn 1s ease",
            }}
          >
            <h1
              style={{
                fontSize: "2em",
                marginBottom: "20px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              AIRDROP
            </h1>
            <Airdrop
              stakingBalance={this.props.stakingBalance}
              issueTokens={this.props.issueTokens}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
