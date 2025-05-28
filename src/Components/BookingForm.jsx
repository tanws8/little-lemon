<form style="display: grid; max-width: 200px; gap: 20px">
  <label htmlFor="res-date">Choose Date</label>
  <input type="date" id="res-date" />
  <label htmlFor="res-time">Choose Time</label>
  <select name="time-selection" id="res-time">
    <option value="17:00">17:00</option>
    <option value="18:00">18:00</option>
    <option value="19:00">19:00</option>
    <option value="20:00">20:00</option>
    <option value="21:00">21:00</option>
    <option value="22:00">22:00</option>
  </select>
  <label htmlFor="guests">Number of guests</label>
  <input type="number" placeholder="1" min="1" max="10" id="guests" />
  <label htmlFor="occasion">Occasion</label>
  <select name="occasion-selection" id="occasion">
    <option value="Birthday">Birthday</option>
    <option value="Anniversary">Anniversary</option>
  </select>
  <input type="submit" value="Make Your Reservation" />
</form>;
