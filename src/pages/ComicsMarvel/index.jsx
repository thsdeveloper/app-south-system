import React, {Component, useContext} from 'react';
import Comic from "../../components/comic";
import {useComic} from '../../hooks/Comic';
import {useAuth0} from "@auth0/auth0-react";

const ComicsMarvel = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isAuthenticated){
    return (
      <Comic />
    );
  }
  return (
    <div>Olalkjh</div>
  )

}
export default ComicsMarvel;
