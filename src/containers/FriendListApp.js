import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend, genderFriend} from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';
import ReactPaginate from 'react-paginate';

class FriendListApp extends Component {
 
  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      perPage: 2,
      pageCount: props.friendlist.friendsById.length / 2,
      data: this.getData(0, props.friendlist.friendsById)
    }
  }

  handlePageClick = (data) => {
    let selected = data.selected
    let offset = Math.ceil(selected * this.state.perPage)

    this.setState({offset: offset, data:this.getData(offset,this.props.friendlist.friendsById ) })
  }

  getData = (offset, list) => {
    return list.slice(offset, offset+2)
  }

  componentWillReceiveProps = (nextProps) => {
    let length = nextProps.friendlist.friendsById.length
    let offset = this.state.offset
    if(this.state.offset >= length)
      offset-=2
    this.setState({ data:this.getData(offset, nextProps.friendlist.friendsById),
                    pageCount: length / 2,
                    offset: offset })

  }

  refreshList = () => {
    this.setState({ data:this.getData(this.state.offset, this.props.friendlist.friendsById) })
  }

  render () {
    const { friendlist: { friendsById }} = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      genderFriend: this.props.genderFriend
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} refreshList={this.refreshList}/>
        <FriendList friends={this.state.data} actions={actions}/>

        <ReactPaginate previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          forcePage={this.state.offset /2}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  genderFriend
})(FriendListApp)
