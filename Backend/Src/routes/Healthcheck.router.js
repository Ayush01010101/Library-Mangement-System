import {Router} from 'express'
import Healthcheck from '../controllers/Healthcheck.controller.js'
const router=Router()

router.route('/healthcheck').get(Healthcheck)