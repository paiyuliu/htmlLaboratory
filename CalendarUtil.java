

import static java.lang.System.out;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class CalendarUtil {
    public static void main(String[] args) {
        Calendar birth = Calendar.getInstance();
        birth.set(1975, Calendar.MAY, 26);
        Calendar now = Calendar.getInstance();
        out.printf("歲數%d%n", yearsBetween(birth, now));
        out.printf("天數�%d%n", daysBetween(birth, now));
        
        // 兩個一樣的意思
        //new Date(System.currentTimeMillis());
        //new Date();
        
        SimpleDateFormat smf = new SimpleDateFormat("YYYY/MM/dd");
        Date birthday = birth.getTime();
        out.println(smf.format(birthday));
        try {
			Date birthday2 = smf.parse("1983/8/8");
			System.out.println(smf.format(birthday2));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        java.sql.Date sqlDate = new java.sql.Date(birth.getTime().getTime());
        
        //Calendar.gettime 轉為 java.util.date
        // java.util.date.getTime 轉為 long 所以 java sql date 可以用了！
        
        out.println(sqlDate);
        
        
        
    }
    
    public static long yearsBetween(Calendar begin, Calendar end) {
        Calendar calendar = (Calendar) begin.clone();
        long years = 0;
        while (calendar.before(end)) {
            calendar.add(Calendar.YEAR, 1);
            years++;  
        }
        return years - 1;
    }
    
    public static long daysBetween(Calendar begin, Calendar end) {
        Calendar calendar = (Calendar) begin.clone();
        long days = 0;
        while (calendar.before(end)) {
            calendar.add(Calendar.DATE, 1);
            days++;
        }
        return days - 1;
    }
}
