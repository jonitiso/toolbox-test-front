import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {BASE_URL} from "../constants";


export const fetchItemsThunk = createAsyncThunk(
    'items/fetchItems',
    async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const fileName = urlParams.get('fileName');
      const response = await fetch(`${BASE_URL}/files/data${fileName ? `?fileName=${fileName}` : ''}`);
      const data = await response.json();
      const items = [];
      data.forEach((item) => {
        item.lines.forEach((line) => {
          items.push({
            fileName: item.file,
            text: line.text,
            number: line.number,
            hex: line.hex
          });
        })
      })
      return items;
    })

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: []
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItemsThunk.fulfilled, (state, action) => {
      state.items = action.payload
    })
  }
})

export const {setItems, fetchData} = itemsSlice.actions

export default itemsSlice.reducer
