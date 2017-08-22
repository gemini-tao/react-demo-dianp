import React, { Component } from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'

class Home extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userInfo.cityName} />
        <Category />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
