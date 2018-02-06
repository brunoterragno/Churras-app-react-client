import React from 'react';
import { Link } from 'react-router-dom';

const AddEditChurras = () => (
  <div className="column">
    <div class="field">
      <label class="label level-left">Título</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label level-left">Data</label>
      <div class="control">
        <input class="input" type="date" />
      </div>
    </div>

    <div class="field">
      <label class="label level-left">Grana com Bebida :)</label>
      <div class="control">
        <input class="input" type="number" />
      </div>
    </div>

    <div class="field">
      <label class="label level-left">Grana Sem Bebida :(</label>
      <div class="control">
        <input class="input" type="number" />
      </div>
    </div>

    <div class="field">
      <label class="label level-left">Descrição</label>
      <div class="control">
        <textarea class="textarea" />
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text">
          <Link to="/">Cancel</Link>
        </button>
      </div>
    </div>
  </div>
);

export default AddEditChurras;
