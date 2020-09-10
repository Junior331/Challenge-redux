import React, { useState } from "react";
import * as S from "./HomeStyled";
import { Card } from "../../components/modules";
import { Input, Button } from "../../components/elements";
import { useSelector, useDispatch } from "react-redux";
import { setRepos } from "../../store/actions/reposActions";

const Home = () => {
  const [username, setUsername] = useState();
  const { repos, loading } = useSelector((store) => store.repos);
  const dispatch = useDispatch();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = () => {
    if (username) dispatch(setRepos(username));
  };

  if (loading) return <div>LOADING......</div>;

  return (
    <S.HomeContainer>
      <S.SubContainer>
        <Input
          type="text"
          placeholder="Digite o nome de usuário do Github..."
          onChange={handleUsername}
        />
        <Button onClick={handleSubmit}>Pesquisar</Button>
      </S.SubContainer>
      {repos &&
        repos.map((repo) => {
          return (
            <Card key={repo.id} repo_name={repo.name}>
              <S.Title>{repo.name}</S.Title>
            </Card>
          );
        })}
    </S.HomeContainer>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     // login: state.login,
//     repos: state.repos,
//     username: state.username,
//     // repo_name: state.name,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeUsername: (e) => dispatch(actionCreator.changeUsername(e)),
//     getUserData: (e, username) =>
//       dispatch(actionCreator.getUserData(e, username)),
//   };
// };

export default Home;
