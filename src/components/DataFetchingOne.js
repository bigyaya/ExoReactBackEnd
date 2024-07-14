import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'; // Import le component BeatLoader (npm install react-spinners)


function DataFetchingOne() {
    //chargement de la donnée
    const [loading, setLoading] = useState(true);
    //l'erreur de chargement
    const [error, setError] = useState("");
    //donnée à afficher
    const [donnee, setDonnee] = useState({}); //initailise avec un objet '{}', si c'est une chaine vide '', si  c'est tableau '[]'

    //appel à l'API lors du chargement du composant
    // fonction pour récupéré les données
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response  => {
            setLoading(false) //arrete de récupérer les données
            // console.log(response.data); 
             setDonnee(response.data) //affiche les données de setDonnee
            setError('')
        })
            .catch(error => {
                setLoading(false)
                setDonnee('')
                setError('something went wrong')
            });
    }, [])
    // , [] : cette fonction (useEffect) ne sera appelé qu'une fois au chargement 

    return (
        <div>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <BeatLoader size={15} color={'#f1c40f'} />
                </div>
            ) : (
                <>
                    <h1>{donnee.title}</h1>
                    <p>{donnee.body}</p>
                </>
            )}
            {error ? <div>{error}</div> : null}
        </div>
    );
}

export default DataFetchingOne

