import { useState } from "react";
import AMENFTABI from "./AMENFT.json"
import { Box, Button, Flex, Input, Text} from '@chakra-ui/react';
const { ethers } = require("ethers");
// const ethers = require("ethers");

const AMENFTaddress = "0x560C05283e46CdAa8a75454723929AcFEB1160C9";
                       

const Mint = ({accounts, setAccounts}) =>{
    const isConnected = Boolean(accounts[0])
    const [uri, setUri] = useState('')


    async function handleMint(){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = await provider.getSigner()
            const contract = new ethers.Contract(
                AMENFTaddress,
                AMENFTABI.abi,
                signer
            )

            try {
                const uriString = { uri }
                const address = accounts[0]
                setUri('')
                console.log("response: ", uriString.uri, address)
                const options = {value: ethers.utils.parseEther("0.005")}
                const response = await contract.safeMint(address, uriString.uri, options)
                console.log("response: ", response)
                
            } catch (error) {
                console.log("erorr: ", error)
            }
        }
    }
    return (

        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
            <div>
                <Text fontSize="48px" textShadow="0 5px #000000">AME NFT</Text>
                <Text
                fontSize="30px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                textShadow="0 2px 2px #000000"
                
                >Hello. Each mint costs 0.001 ETH. Check out our inimitable and unique NFTs. Artyom, Maxim, Yelkhan</Text>
            </div>
            {isConnected ? (
                <Flex className="create" align="center" justify="center">
                    
                    <form>
                        <Input
                        fontFamily="inherit"
                        width="500px"
                        height="40px"
                        textAlign="center"
                        type="text" 
                        required 
                        value={uri} 
                        onChange={(e)=> setUri(e.target.value)}/>
                        <Button 
                     backgroundColor="#D6517D" 
                     borderRadius="5px"
                     boxShadow="0px 2px 2px 1px #0F0F0F"
                     color="white"
                     cursor="pointer"
                     fontFamily="inherit"
                     padding="15px"
                     marginTop="10px"
                     onClick={handleMint}>Mint</Button>
                    </form> 
                    
                    
                
                </Flex>
                
            ):(
                <p>You must be connected to Mint.</p>
            )}
            
            </Box>
        </Flex>
    )

}

export default Mint;