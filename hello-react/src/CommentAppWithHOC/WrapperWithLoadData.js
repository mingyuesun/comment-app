import React from 'react'

export default (WrapperComponent, name) => {
  class LocalStorageActions extends React.Component {
		constructor(){
			super()
			this.state = {data: null}
		}

		componentWillMount(){
			let data = localStorage.getItem(name)
			try {
        this.setState({data: JSON.parse(data)})
			} catch {
        this.setState({data})
			}
		}
		
		saveData = (data) => {
      try {
        localStorage.setItem(name, JSON.stringify(data))
			} catch {
        localStorage.setItem(name, data)
			}
		}

    render(){
			return (
				<WrapperComponent data={this.state.data} saveData={this.saveData} {...this.props}/>
			)
		}
	}
	return LocalStorageActions
}