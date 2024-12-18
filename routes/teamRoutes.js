import express from "express";
import TeamController from "../controllers/teamController.js";

const router = express.Router();

router
  .route("/team")
  .all((req, res, next) => {
    console.log(`[${req.method}] Request to ${req.originalUrl}`);
    next();
  })
  .get(TeamController.getTeam)
  .post(TeamController.createTeam)
  .patch(TeamController.updateTeam)
  .delete(TeamController.deleteTeam);

export default router;
