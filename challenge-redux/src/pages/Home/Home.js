import React from "react";
import * as S from "./HomeStyled";
import { Card } from "../../components/modules"
import { Input, Button } from "../../components/elements";
import { connect } from 'react-redux'
import * as actionCreator from "../../store/actions/actions"
// import { CircularProgress } from '@material-ui/core';

const Home = (props) => {
  // const repoStore = useSelector(state => state.repos)
  // const { repos, loading } = repoStore;

  const handleUsername = e => {
    props.changeUsername(e)
  }

  const handleSubmit = (e) => {
    props.getUserData(e, props.username)
  }

  return (
    <S.HomeContainer>
      <S.SubContainer>
        <Input type="text" placeholder="Digite o nome de usuário do Github..." onChange={handleUsername} />
        <Button onClick={handleSubmit}>Pesquisar</Button>
      </S.SubContainer>
      {/* {repos.map(repo => {
        return (
          <Card
            key={repo.id}
            repo_name={repo.name}
            homepage={repo.homepage}
            description={repo.description}

          />
        )
      })} */}
      <Card>
        <S.Title>{props.repos}</S.Title>
        {/* <S.Title>{props.login}</S.Title> */}
      </Card>
    </S.HomeContainer>
  );
};

const mapStateToProps = state => {
  return {
    login: state.login,
    username: state.username,
    repos: state.repos,
    description: state.description,
    homepage: state.homepage,

  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeUsername: e => dispatch(actionCreator.changeUsername(e)),
    getUserData: (e, username) => dispatch(actionCreator.getUserData(e, username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
