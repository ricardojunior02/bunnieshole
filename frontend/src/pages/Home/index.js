import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { MdSearch } from 'react-icons/md';

import api from '../../api';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Search, InputDiv, SelectDiv, Main } from './styles';
import LoadingList from '../../components/LoadingList';
import Warning from '../../components/Warning';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const productsFind = useSelector(state => state.productsFind);

  const [filterBy, setFilterBy] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const [warning, setWarning] = useState(false);
 

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoading(true);

    setFilterBy(q);
    setOrderBy('');

    const { data } = await api.get(`/product?q=${q}`);
 
    if(data.length < 1){ 
     setWarning(true);
     setQ('');
     return;
    }

    setTimeout(() => {
      dispatch({type: 'GET_PRODUCTS',  products: undefined });
      dispatch({type: 'GET_FILTER', productsFind: data});
      setLoading(false);
    },1500);
    setQ('');
    return;
  }

  useEffect(() => {
    const loadProducts = async () => {
      if(filterBy || orderBy) {
        
        setWarning(false);
        const order = orderBy.split(',');
        
        const { data } = await api.get(`/product?q=${filterBy}&orderBy=${order[0]}&sortBy=${order[1]}`);
  
        if(data.length < 1){
          setWarning(true);
         return setLoading(false);
        }

        setLoading(true);

        setTimeout(() => {
          dispatch({type: 'GET_PRODUCTS',  products: data });
          setLoading(false);
        },1500)      
        
        return ;
      }

      const { data } = await api.get('/product');

      if(data.length < 1){
        setLoading(false);
        
        return setWarning(true);
      }

      setTimeout(() => {
        dispatch({type: 'GET_PRODUCTS',  products: data });
        setLoading(false);
      },1500)
    }

    loadProducts();
       
  }, [filterBy, orderBy, dispatch])

  return (
    <>
      <Header />
      <Container>
        <Search>
          <InputDiv onSubmit={handleSubmit}>
            <input type="text" placeholder="Procure seu produto" value={q} onChange={e => setQ(e.target.value)} />
            <button type="submit">
              <MdSearch size={24} color="#CA1240" />
            </button>  
          </InputDiv>
          <SelectDiv>  
            <label htmlFor="filterBy">Filtrar por</label>
            <select name="filterBy" id="filterBy" value={filterBy} onChange={e => setFilterBy(e.target.value)}>
              <option className="option" value="">Selecione</option>
              <option className="option" value="image">Imagem</option>
              <option className="option" value="video">Video</option>
              <option className="option" value="audio">Audio</option>
            </select>
            
            <label htmlFor="orderBy">Ordernar por</label>
            <select name="orderBy" id="orderBy" value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
                <option value="">Selecione</option>
                <option value="createdAt, 1">Mais Novo</option>
                <option value="createdAt, -1">Mais antigo</option>
                <option value="value, 1">Menor preço</option>
                <option value="value, -1">Maior preço</option>
                <option value="rating, -1">Avaliações</option>
            </select>
          </SelectDiv>  
        </Search>
        <Main>
          {warning ? <Warning /> : (
            <ul>
              {loading ? <LoadingList /> : (
                <>
                 {products !== undefined ? (
                   <>
                    {products.map(product => (
                      <Card 
                        key={product._id}
                        data={product}
                      />
                    ))}
                    </>
                 ) : (
                   <>
                    {productsFind.map(product => (
                      <Card 
                        key={product._id}
                        data={product}
                      />
                      ))}
                   </>
                 )}
                </>
              )}
            </ul>
          )}
        </Main>
      </Container>
    </>
  )
}

export default Home;