import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class SearchPlaces extends React.Component {
	constructor(props) {
		super(props);
		this.state = { address: 'San Francisco, CA' };
		this.onChange = (address) => this.setState({ address });
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
 
	handleFormSubmit(event)  {
		event.preventDefault();

		// geocodeByAddress(this.state.address,  (err) => {
		// });
	}

	render() {
		const inputProps = {
			value: this.state.address,
			onChange: this.onChange,
		};

		return (
      <div>
      <h2>Select your city</h2>
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} options={this.props.options}/>
        <button type="submit">Submit</button>
      </form>
      </div>
		);
	}
}

export default SearchPlaces;