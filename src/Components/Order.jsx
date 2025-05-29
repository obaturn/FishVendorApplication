import React, { useState, useEffect } from 'react';
import styles from './OrderStyle.module.css';

const OrderPage = () => {
  const [prices, setPrices] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Fish',
    item: 'Kote',
    type: 'kilo',
    quantity: 1,
    screenshot: null,
  });

  const [total, setTotal] = useState(0);

  // Fetch price data
  useEffect(() => {
    fetch('/prices.json')
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  // Calculate total whenever relevant fields change
  useEffect(() => {
    const { category, item, type, quantity } = formData;
    const unitPrice = prices?.[category]?.[item]?.[type] || 0;
    setTotal(unitPrice * quantity);
  }, [formData, prices]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === 'quantity' ? Number(value) : name === 'screenshot' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted! We will contact you after confirming your payment.');

    setFormData({
      name: '',
      phone: '',
      category: 'Fish',
      item: 'Kote',
      type: 'kilo',
      quantity: 1,
      screenshot: null,
    });
  };

  const { name, phone, category, item, type, quantity } = formData;
  const productOptions = Object.keys(prices[category] || {});

  return (
    <div className={styles.container}>
      <h2>Order for Product</h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="tel" name="phone" value={phone} onChange={handleChange} required />

        <label>Category:</label>
        <select name="category" value={category} onChange={handleChange}>
          <option>Fish</option>
          <option>Chicken</option>
        </select>

        <label>Product:</label>
        <select name="item" value={item} onChange={handleChange}>
          {productOptions.map((prod) => (
            <option key={prod}>{prod}</option>
          ))}
        </select>

        <label>Type:</label>
        <select name="type" value={type} onChange={handleChange}>
          <option value="kilo">Kilo</option>
          <option value="carton">Carton</option>
        </select>

        <label>Quantity:</label>
        <input type="number" name="quantity" value={quantity} onChange={handleChange} required />

        <p><strong>Total:</strong> ₦{total.toLocaleString()}</p>

        <hr />
        <p>
          <strong>Send ₦{total.toLocaleString()} to:</strong><br />
          <strong>Moniepoint Account:</strong> 5886276603<br />
          <strong>Name:</strong> Movicks Creation
        </p>

        <label>Upload Payment Proof (screenshot):</label>
        <input type="file" name="screenshot" accept="image/*" onChange={handleChange} required />

        <br /><br />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderPage;
