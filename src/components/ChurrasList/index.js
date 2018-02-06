import React, { Component } from 'react';
import Grid, { ColumnDefinition, RowDefinition } from 'griddle-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchChurras } from '../../actions/ChurrasActions';
import './index.css';

class ChurrasList extends Component {
  componentDidMount() {
    this.props.fetchChurras();
  }
  render() {
    return (
      <div className="Churras-list">
        <div className="columns">
          <div className="column auto">
            <button className="button level-left">
              <Link to="/AddEditChurras">Adicionar</Link>
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column auto">
            {this.props.loading ? (
              <p>Carregando...</p>
            ) : (
              <Grid data={this.props.items} enableSettings={false}>
                <RowDefinition>
                  <ColumnDefinition id="id" visible={false} />
                  <ColumnDefinition id="title" title="Título" />
                  <ColumnDefinition id="date" title="Data" />
                </RowDefinition>
              </Grid>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.get('churras').get('loading'),
    items: state.get('churras').get('items')
  };
};

const mapDispatchToProps = { fetchChurras };

export default connect(mapStateToProps, mapDispatchToProps)(ChurrasList);
