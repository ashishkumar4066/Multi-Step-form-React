import React, { Component } from "react";
import axios from "axios";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import { MenuItem } from "material-ui";

import ImageResults from "../image-results/ImageResults";
import Spinner from "../Spinner/Spinner";
export default class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "21796249-dd7e7d236ef2a796c1911af5c",
    images: [],
  };
  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ searchText: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => {
            this.setState({ images: res.data.hits });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  onAmountChange = (e, index, value) => this.setState({ amount: value });

  render() {
    let imageResults;
    if (this.state.images.length > 0) {
      imageResults = <ImageResults images={this.state.images} />;
    } else {
      imageResults = <Spinner />;
    }
    return (
      <div style={{ marginRight: "30px", marginLeft: "30px" }}>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={(e) => this.onTextChange(e)}
          floatingLabelText="Search For Images"
          fullWidth={true}
        />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={25} primaryText="25" />
        </SelectField>
        {imageResults}
      </div>
    );
  }
}
