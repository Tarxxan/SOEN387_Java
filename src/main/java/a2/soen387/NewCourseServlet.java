package a2.soen387;

import Classes.Courses;
import Classes.CoursesMapper;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.sql.Date;
import java.sql.SQLException;
import java.sql.Time;

@WebServlet("/NewCourseServlet")
public class NewCourseServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int strComp = request.getParameter("startDate").compareTo(request.getParameter("endDate"));
            if (strComp == 0 || strComp > 0) {
            response.getOutputStream().println("<script type=text/javascript>"+" window.alert('Start and End dates are incorrect, please verify before re-submitting')"+
            "window.location.href='newcourse.jsp'</script>");
            response.sendRedirect(request.getContextPath()+"/newcourse.jsp");
        }

        String courseCode = request.getParameter("courseCode");
        String title =request.getParameter("title");
        String semester=request.getParameter("semester");
        String days = request.getParameter("days");
        Time time = Time.valueOf(request.getParameter("time"));
        Date startDate = Date.valueOf(request.getParameter("startDate"));
        Date endDate = Date.valueOf(request.getParameter("endDate"));
        int createdBy = Integer.parseInt(request.getParameter("createdBy"));

        Courses course = new Courses(courseCode,title,semester,days,time,startDate,endDate,createdBy);
        CoursesMapper cm = new CoursesMapper();
        try {
            cm.addClass(course);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
